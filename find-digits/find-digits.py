import math
import os
import random
import re
import sys


def findDigits(n):
    result = 0
    for d in str(n):
        try:
            print('n:', n)
            print('d:', d)
            if n % int(d) == 0:
                result += 1
        except Exception as e:
            result = result
    return result


if __name__ == '__main__':
    # n = 124
    # n = 111
    # n = 10
    # n = 12
    n = 1012
    result = findDigits(n)
    print(f'Result is {result}')
