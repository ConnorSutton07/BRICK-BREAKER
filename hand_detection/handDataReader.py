def getHandData():
    fileName = r'./hand_detection/handData.txt'
    fileData = open(fileName, 'r')
    data = fileData.readline()
    fileData.close()

    print(data)

getHandData()
