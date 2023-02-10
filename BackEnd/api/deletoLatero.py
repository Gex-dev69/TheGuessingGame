import requests


def sendoRequ(keyW):
    r = requests.get("http://127.0.0.1:8000/"+keyW)
    print(r.status_code)  

while True:
    tempo = input("Command> ")
    if tempo == "break":
        break
    elif tempo == "test":
        print("Test")
    elif tempo == "reset":
        sendoRequ("reset")
    elif tempo == "call":
        sendoRequ("callmedaddy")

            
    
