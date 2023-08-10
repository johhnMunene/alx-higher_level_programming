#!/usr/bin/python3

def uppercase(s):
    result = ""
    for c in s:
        if ord(c) >= 97 and ord(c) <= 122:
            c = chr(ord(c) - 32)
        result += c
    print(result)

