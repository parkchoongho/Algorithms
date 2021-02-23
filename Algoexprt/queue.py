class Node():
    def __init__(self, val):
        self.val =val
        self.next = None

class Queue():
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    def push(self, val):
        new_node = Node(val)
        if self.first == None:
            self.first = new_node
            self.last = new_node
        else:
            self.last.next = new_node
            self.last = new_node
        self.size += 1
        return self.size

    def pop(self):
        if self.first == None:
            return None
        temp = self.first
        if self.first == self.last:
            self.last = None
        self.first = self.first.next
        self.size -= 1
        return temp.val