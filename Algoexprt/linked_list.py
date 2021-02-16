class Node():
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList():
    def __init__(self):
        self.head = None

    def append(self, val):
        new_node = Node(val)
        if self.head == None:
            self.head = new_node
            return None
        current_node = self.head
        while current_node.next != None:
            current_node = current_node.next
        current_node.next = new_node

    def pop(self):
        last_node = self.head
        # 링크드리스트에 아무런 노드가 없는 경우
        if last_node == None:
            return None
        # 헤드에만 노드가 있는 경우
        if last_node.next == None:
            self.head = None
            return last_node.val
        prev_node = self.head
        while last_node.next !=None:
            prev_node = last_node
            last_node = last_node.next
        prev_node.next = None
        return last_node.val

    def shift(self):
        first_node = self.head
        # 링크드리스트에 아무런 노드가 없는 경우
        if first_node == None:
            return None
        self.head = first_node.next
        return first_node.val

    def unshift(self, val):
        new_node = Node(val)
        new_node.next = self.head
        self.head = new_node


    def __str__(self):
        current_node = self.head
        if current_node == None:
            return "{}"
        output = "{"
        output += str(current_node.val)
        while current_node.next != None:
            current_node = current_node.next
            output += " -> "
            output += str(current_node.val)
        output += "}"
        return output

linked_list = LinkedList()

linked_list.append(2)
linked_list.append(1)
linked_list.append(27)
linked_list.append(30)

print(linked_list.shift())
print(linked_list.shift())
print(linked_list.shift())
print(linked_list.shift())
print(linked_list.shift())

linked_list.unshift(3)
linked_list.unshift(2)
linked_list.unshift(1)
linked_list.unshift(56)


print(linked_list)

