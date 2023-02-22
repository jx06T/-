from selenium import webdriver
import time
from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from subprocess import CREATE_NO_WINDOW
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
import cv2

class Song():
    def __init__(self, url):
        self.url = url
        chrome_options = Options()
        chrome_service = ChromeService(executable_path='..\chromedriver.exe')
        chrome_service.creationflags = CREATE_NO_WINDOW
        chrome_options.add_argument("--headless")
        self.driver = webdriver.Chrome(executable_path = '..\chromedriver.exe',service=chrome_service,options=chrome_options)
        self.driver.get(self.url)
    def SetVolume(self,v=""):
        if(v==""):
            return self.driver.execute_script('return document.getElementsByName("media")[0].volume' )
        self.driver.execute_script('document.getElementsByName("media")[0].volume ='+str(v))
    def stop(self):
        self.driver.execute_script('document.getElementsByName("media")[0].pause()')
    def play(self):    
        self.driver.execute_script('document.getElementsByName("media")[0].play()')
    def GetDuration(self):    
        return self.driver.execute_script('return document.getElementsByName("media")[0].duration')
    def SetCurrentTime(self,t=""):  
        if(t==""):  
            return self.driver.execute_script('return document.getElementsByName("media")[0].currentTime')
        self.driver.execute_script('return document.getElementsByName("media")[0].currentTime = '+str(t))


song = Song("file:///C:/Users/Blue-S410U/Documents/code/jp6cl6/Eric%E5%91%A8%E8%88%88%E5%93%B2%E3%80%8A%E6%80%8E%E9%BA%BC%E4%BA%86%20What's%20Wrong%E3%80%8BOfficial%20Music%20Video%20-%20%E8%8F%AF%E5%8A%87%E3%80%90%E4%BD%A0%E6%9C%89%E5%BF%B5%E5%A4%A7%E5%AD%B8%E5%97%8E%EF%BC%9F%E3%80%91%E7%89%87%E5%B0%BE%E6%9B%B2.mp3")
i = 1
while 1==1:
    i+=1
    song.SetVolume((i%100)/100)
    print(song.SetVolume(),song.GetDuration(),song.SetCurrentTime())
    
    time.sleep(0.1)
    if i%300==50:
        song.SetCurrentTime(200)
        song.stop()
        print("!!")
    if i%300==150:
        song.play()
        print("!!!")

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break