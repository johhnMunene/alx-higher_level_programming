#!/usr/bin/python3
if __name__ == "__main__":
    from calculator_1 import add

    a = 10
    b = 5
    result = add(a, b)
    print("{} + {} = {}".format(a, b, result))

    from calculator_1 import sub

    a = 10
    b = 5
    result = sub(a,b)
    print("{} - {} = {}".format(a, b, result))

    from calculator_1 import mul

    a = 10
    b = 5
    result = mul(a,b)
    print("{} * {} = {}".format(a, b, result))

    from calculator_1 import div

    a = 10
    b = 5
    result = div(a,b)
    print("{} / {} = {}".format(a, b, result))
