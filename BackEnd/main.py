import random,os

random_words = ["random","letter","from","list"]
attemp = 7
the_word = random.sample(random_words,1)


print(the_word[0])

print(len(the_word[0]))

subject = "*"*len(the_word[0])

SubjectList = list(subject)
print(SubjectList)

def index_Finder(charc,word):
    return [i for i, ltr in enumerate(word) if ltr in charc]

print(index_Finder("e",the_word[0]))
print( "*"*len(the_word[0]))
while True:
    test = input("GIVE ME? ")
    if len(test) > 1:
        print("Please choose only one letter! ")
        continue
    if len(index_Finder(test,the_word[0])) <= 0:
        attemp -= 1
        os.system("cls")
        print(f"Wrong!!\nYou have {attemp} attempts left")
        print("".join(SubjectList))
    elif attemp == 0:
        os.system("cls")
        print("You lost")
        break
    else:
        for x in index_Finder(test,the_word[0]):
            SubjectList[x] = test   
        os.system("cls")
        print("".join(SubjectList))
    if "*" not in SubjectList:
        print("You Won")
        break
    


    
