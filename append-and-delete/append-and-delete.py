import math
import os
import random
import re
import sys


def appendAndDelete(s, t, k):
    diff = False
    diff_i = 0
    s_len = len(s)
    print('s_len:', s_len)
    t_len = len(t)
    print('t_len:', t_len)
    for i, char_s in enumerate(s):
        print('Index:', i)
        print('Current s:', char_s)
        try:
            char_t = t[i]
        except Exception as e:
            char_t = ''
        print('Current t:', char_t)
        if char_s != char_t:
            print('Diff!')
            print('s_index:', i)
            diff_i = i
            diff = True
            break
    print('diff?:', diff)
    if diff:
        print('#steps:', abs(((s_len - diff_i) + (t_len - diff_i))))
        if abs(((s_len - diff_i) + (t_len - diff_i))) > k:
            return 'No'
    else:
        print('#steps:', abs((t_len - s_len)))
        if abs((t_len - s_len)) > k:
            return 'No'
    return 'Yes'


if __name__ == '__main__':
    # s = 'abc'
    # t = 'def'
    # k = 6
    # s = 'aba'
    # t = 'aba'
    # k = 7
    s = 'hackerhappy'
    t = 'hackerrank'
    k = 9
    # s = 'ashley'
    # t = 'ash'
    # k = 2
    # s = 'a'
    # t = 'ab'
    # k = 2
    # s = 'aaa'
    # t = ''
    # k = 2
    # s = ''
    # t = 'aaa'
    # k = 2
    
    # According to the statement the below inputs should result 'Yes'
    # but I believe there's a bug in these test cases because they're waiting a result 'No'
    '''
    s = 'y'
    t = 'yu'
    k = 2
    
    s = 'abcd'
    t = 'abcdert'
    k = 10
    '''

    result = appendAndDelete(s, t, k)
    print(result)
