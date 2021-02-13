class Node():
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList():
    def __init__(self):
        self.head = Node(1)

    def append(self, node):
        last_node = self.head
        while last_node.next != None:
            last_node = last_node.next
        last_node.next = node

    def __str__(self):
        present_node = self.head
        output = "{"
        output += str(present_node.data)
        while present_node.next != None:
            present_node = foo_node.next
            output += " -> "
            output += str(present_node.data)
        if present_node != self.head:
            output += str(present_node.data)
        output += "}"
        return output

linked_list = LinkedList()

new_node = Node(2)

linked_list.append(new_node)

print(linked_list)

