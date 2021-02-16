import os
import sys
import time

class ProcessPool:
    def __init__(self, size):
        pass

    def submit(self, func, *args, **kwargs):
        # func(*args, **kwargs)
        pass


class Future():
    pass


def fibo(n):
  If n == 0 and n == 1:
    Return 1
  Else:
     Return fibo(n-1) + fibo(n-2)

Pool = ProcessPool(size=10)
f1 = pool.submit(fibo, n=5)
pool.execute(fibo, n=5)
pool.execute(fibo, n=5)
pool.execute(fibo, n=5)
print(f1.result())
