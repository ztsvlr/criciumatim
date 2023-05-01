import os
import time

# Define the IP address to ping
ip_address = "45.152.199.157"

# Loop forever
while True:
    
    # Ping the IP address and capture the output
    response = os.system(f"ping -c 1 {ip_address}")
    
    # Check the response code (0 means success)
    if response == 0:
        print(f"Ping to {ip_address} was successful!")
    else:
        print(f"Ping to {ip_address} failed!")
    
    # Wait for 200ms before pinging again
    time.sleep(0.05)
