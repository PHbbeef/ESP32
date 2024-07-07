#include <Arduino.h>

const int ledpin = 23;

void setup() {
  pinMode(ledpin,OUTPUT);
}

void loop() {
  digitalWrite(ledpin,HIGH);
  delay(3000);
  digitalWrite(ledpin,LOW);
}
