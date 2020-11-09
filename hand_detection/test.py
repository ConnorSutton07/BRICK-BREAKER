import numpy as np
import cv2
import process.hand as hp

## Prints 3D data for testing its shape and indexing properties
#  @post prints 3D data for testing
def viewArrSizes():
    roi = np.zeros([90,10,3]) #90 matrices of size 10 rows x 3 cols
    print(roi)

## Displays regions of interest extracted from hand-scan rectangles
#  @pre webcam available
#  @post Displays regions of interest as image on window
def viewROI():
    capture = cv2.VideoCapture(0)

    while capture.isOpened():
        ret, frame = capture.read()
        pressed_key = cv2.waitKey(1)

        if pressed_key & 0xFF == ord('q'):
            break
        elif pressed_key & 0xFF == ord('s'):
            rectangles = hp.get_rectangles(frame)
            roi = hp.get_regionsOfInterest(frame, rectangles)

            handImg = cv2.cvtColor(roi, cv2.COLOR_HSV2BGR)
            cv2.imshow('handPix', handImg) 

            cv2.waitKey()
            break
        else:
            frame = hp.draw_rect(frame)
            cv2.imshow('Rectangles-screen', frame)

    capture.release()
    cv2.destroyAllWindows()
    
## Extracts start and end coordinates of a rectangle from rectangles matrix
#  @param rectangles 4x3 matrix of rectangles
#  @return 2-tuple of start and end coordinates of 0th rectangle
def getPixelShape(rectangles):
    one_rectangle = rectangles[0][0]
    startCoord = one_rectangle[0]
    endCoord = one_rectangle[1]

    return (startCoord, endCoord)

## Displays masked hand image
#  @pre webcam available
def viewHandImg():
    capture = cv2.VideoCapture(0)

    while capture.isOpened():
        ret, frame = capture.read()
        pressed_key = cv2.waitKey(1)

        if pressed_key & 0xFF == ord('q'):
            break
        elif pressed_key & 0xFF == ord('s'):
            rectangles = hp.get_rectangles(frame)
            handHist = hp.get_handHist(frame, rectangles)
            while True:
                handImg = hp.getHandImg(frame, handHist)
                cv2.imshow('Hand', handImg) 
                ret, frame = capture.read()
                pressed_key = cv2.waitKey(1)
                if pressed_key & 0xFF == ord('q'):
                    capture.release()
                    break
        else:
            frame = hp.draw_rect(frame)
            frame = cv2.flip(frame, 1)
            cv2.imshow('Hand-scan', frame)

    capture.release()
    cv2.destroyAllWindows()

## Displays contour of hand in green and hand centroid
#  @pre webcam available
def viewContours():
    capture = cv2.VideoCapture(0)

    while capture.isOpened():
        ret, frame = capture.read()
        pressed_key = cv2.waitKey(1)

        if pressed_key & 0xFF == ord('q'):
            break
        elif pressed_key & 0xFF == ord('s'):
            rectangles = hp.get_rectangles(frame)
            handHist = hp.get_handHist(frame, rectangles)
            while True:
                handImg = hp.getHandImg(frame, handHist)
                contours = hp.getContours(handImg)
                largestContour = max(contours, key=cv2.contourArea) #hand outline
                cv2.drawContours(frame, largestContour, -1, [0, 255, 0], 3)
                handCentroid = hp.getCentroid(largestContour)

                #draw handCentroid
                radius = 5
                centroidColor = [255, 0, 0] 
                lineThickness = -1 #fill circle with -1 value
                cv2.circle(frame, handCentroid, radius, centroidColor, lineThickness)
                cv2.imshow('Contours', frame)
                ret, frame = capture.read()
                pressed_key = cv2.waitKey(1)
                if pressed_key & 0xFF == ord('q'):
                    capture.release()
                    break
        else:
            frame = hp.draw_rect(frame)
            frame = cv2.flip(frame, 1)
            cv2.imshow('Hand-scan', frame)

    capture.release()
    cv2.destroyAllWindows()


## Displays points of interest on frame (centroid, fingertip, and contours)
#  @pre webcam available
def viewPOI():
    capture = cv2.VideoCapture(0)
    isHandHist = False

    while capture.isOpened():
        ret, frame = capture.read()
        pressed_key = cv2.waitKey(1)

        if pressed_key & 0xFF == ord('q'):
            break
        elif pressed_key & 0xFF == ord('s'):
            rectangles = hp.get_rectangles(frame)
            handHist = hp.get_handHist(frame, rectangles)
            isHandHist = True
        elif isHandHist:
            frame = hp.drawPOI(frame, handHist)
        else:
            frame = hp.draw_rect(frame)
            frame = cv2.flip(frame, 1)

        cv2.imshow('Live', frame)

    capture.release()
    cv2.destroyAllWindows()

## Runs programs which test whether features are correctly computed and displayed
#  @pre webcam available
def run():
    viewROI()
    viewHandImg()
    viewContours()
    viewPOI()

run()


