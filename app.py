import cv2
import numpy as np

# Initialize the camera
cap = cv2.VideoCapture(0)  # 0 is for default webcam; for drone camera, replace with appropriate source

while True:
    # Read a frame from the video stream
    ret, frame = cap.read()
    
    if not ret:
        break
    
    # Convert to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Apply edge detection
    edges = cv2.Canny(gray, 50, 150)
    
    # Find contours to detect possible irregularities like holes, bumps, etc.
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # Analyze the contours and decide if terrain is stable
    irregularities_found = False
    for contour in contours:
        if cv2.contourArea(contour) > 500:  # Threshold for significant contours
            irregularities_found = True
            cv2.drawContours(frame, [contour], -1, (0, 255, 0), 3)  # Highlight irregularities
    
    # Display the result
    cv2.imshow('Live Video Feed', frame)
    
    # Decision making based on irregularities
    if irregularities_found:
        print("Warning: Terrain is not stable for landing!")
    else:
        print("Terrain is stable for landing.")
    
    # Exit condition
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the video capture object and close the window
cap.release()
cv2.destroyAllWindows()
