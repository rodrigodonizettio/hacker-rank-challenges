import math
import os
import random
import re
import sys


def permutationEquation(p):
    print(p)
    result = []
    for i, v in enumerate(p):
        cur_index_val = p.index(i+1)+1
        print(f'The value {v} is located at index: {p.index(v)+1}')
        new_index_val = p.index(cur_index_val)
        print(f'The new value {cur_index_val} is located at index: {new_index_val+1}')
        result.append(new_index_val+1)
    return result


if __name__ == '__main__':
    # p = [2, 3, 1]
    p = [4, 3, 5, 1, 2]
    n = 'Oba'
    result = permutationEquation(p)
    print(f'Result is {result}')
