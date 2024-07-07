#include <Arduino.h>
#include <DHT.h>

#define dhtpin 22 //温湿度输出引脚
#define dhttype 11  //dht类型

  DHT dht(dhtpin,dhttype);

void setup() {
  dht.begin();
}

void loop() {
  //温度
  float t = dht.readTemperature();

  //湿度
  float h = dht.readHumidity();
}
