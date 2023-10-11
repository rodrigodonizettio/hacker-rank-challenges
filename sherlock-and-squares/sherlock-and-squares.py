import math
import os
import random
import re
import sys


def squares(a, b):
    a_sqrt = math.sqrt(a)
    a_sqrt_ceil = math.ceil(math.sqrt(a))
    print('a sqrt:', a_sqrt)
    print('a ceil:', a_sqrt_ceil)

    b_sqrt = math.sqrt(b)
    b_sqrt_floor = math.floor(b_sqrt)
    print('b sqrt:', b_sqrt)
    print('b sqrt floor:', b_sqrt_floor)

    result = b_sqrt_floor - a_sqrt_ceil + 1
    return result

    '''
    # This one works but it has performance issues for large input range
    for n in range(a, b+1):
        return 
        n_sqrt = math.sqrt(n)
        # print(n_sqrt)
        # print(n_sqrt.is_integer())
        if n_sqrt.is_integer():
            result += 1
    return result
    '''


if __name__ == '__main__':
    # a = 3
    # b = 9
    # a = 17
    # b = 24
    # a = 24
    # b = 49
    a = 1
    b = 1000000000
    result = squares(a, b)
    print(result)
