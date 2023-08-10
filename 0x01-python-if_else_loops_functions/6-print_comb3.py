#!/usr/bin/python3

for m in range(9):
    for n in range(m + 1, 10):
        print("{:d}{:d}".format(m, n), end="")
        if m < 8:
            print(", ", end="")
print()
