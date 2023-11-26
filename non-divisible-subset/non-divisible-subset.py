import math
import os
import random
import re
import sys


def nonDivisibleSubset(k, s):
    s = list(set(s))
    forbidden_set = set()
    for i, v in enumerate(s):
        print('> i has value:', i, v)
        if v not in forbidden_set:
            for j, x in enumerate(s, start=i+1):
                try:
                    print('> j has value:', j, s[j])
                    if ((v+s[j]) % k != 0):
                        print('>> found:', v, s[j])
                    else:
                        print(f'>>>>> j: {s[j]} will be removed when i is:', v)
                        forbidden_set.add(s[j])
                        print('>>>>> j added to forbidden set!')
                        print('new forbidden:', forbidden_set)
                except Exception as e:
                    print('Exception! e:', e)
                    print('forbidden:', forbidden_set)
                    print('##################')
                    break
    s = set(s)
    print('final:', s.difference(forbidden_set))
    return len(s.difference(forbidden_set))


if __name__ == '__main__':
    # k = 3
    # s = [1, 7, 2, 4]
    # k = 4
    # s = [19, 10, 12, 10, 24, 25, 22]
    k = 7
    s = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]

    result = nonDivisibleSubset(k, s)
    print(result)
