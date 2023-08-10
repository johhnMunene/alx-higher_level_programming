#!/usr/bin/python3
def uppercase(s):
    for c in s:
        if 'a' <= c <= 'z':
            print("{:c}".format(ord(c) - 32), end="")
        else:
            print(c, end="")
