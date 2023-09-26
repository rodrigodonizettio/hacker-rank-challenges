import math
import os
import random
import re
import sys


def jumpingOnClouds(c, k):
    # print(len(c)%k)
    e = 100
    char_pos = ((0+k) % len(c))
    while char_pos != 0:
        print('Character position:', char_pos)
        e -= 1
        if c[char_pos] == 1:
            print('Thunderhead!')
            e -= 2
        print('Current Energy:', e)
        char_pos = ((char_pos+k) % len(c))
    print('Character position:', char_pos)
    e -= 1
    if c[char_pos] == 1:
        print('Thunderhead!')
        e -= 2
    print('Current Energy:', e)
    return e


if __name__ == '__main__':
    # n = 8
    k = 3
    # c = [0, 0, 1, 0]
    # c = [0, 0, 1, 0, 0, 1, 1, 0]
    #      0  1  2  3  4  5  6  7  8  9
    c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0]
    result = jumpingOnClouds(c, k)
    print(f'Result is {result}')
