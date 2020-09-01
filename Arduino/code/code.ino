
#include <i2cmaster.h>
int address = 0xb4; 
int erc = 0; 
int dataH = 0; 
int dataL = 0; 
double tempnalsb = 0.02; 
double temperature = 0; 


void setup ()
{
  i2c_init (); 
  Serial.begin(9600);
void loop ()
{

  i2c_start_wait (address + I2C_WRITE);
  i2c_write (0x07); 
  i2c_rep_start (address + I2C_READ); 
  dataL = i2c_readAck (); 
  dataH = i2c_readAck (); 
  erc = i2c_readNak (); 
  i2c_stop (); 


  temperature = (double) (((dataH & 0x007F) << 8) + dataL); 
  temperature = temperature * tempnalsb; 

  temperature = temperature - 273.15; 
  Serial.println(temperature);

  i2c_start_wait (address + I2C_WRITE);
  i2c_write (0x06); 
  i2c_rep_start (address + I2C_READ);
  dataL = i2c_readAck ();
  dataH = i2c_readAck ();
  erc = i2c_readNak ();
  i2c_stop ();

  delay (200); 
}
