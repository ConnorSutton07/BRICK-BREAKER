## Reads hand data from txt file
#  @pre assumes data is in JSON string format
#  @post prints data to stdout
def getHandData():
    fileName = r'./hand_detection/handData.txt'
    fileData = open(fileName, 'r')
    data = fileData.readline()
    fileData.close()

    print(data)

getHandData()
