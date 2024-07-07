#!/usr/bin/env python      
import tkinter as tk

class Application(tk.Frame):
    def __init__(self, master=None):
        tk.Frame.__init__(self, master)
        self.grid()
        # Setting the window to be always on top
        self.master.wm_attributes('-topmost', 1)
        # Setting min size as 800x600
        self.master.minsize(width=800, height=600)
        # Starting as maximized window
        self.master.state('zoomed')
        # Setting fullscreen
        self.createWidgets()

    def createWidgets(self):
        # Creating a button which change fullscreen mode
        self.handleFullscreenButton = tk.Button(self, text='Handle Fullscreen',
            command=self.handle_fullscreen)
        self.handleFullscreenButton.grid()

        # Creating a button which change topmost mode (always on top)
        self.handleTopmostButton = tk.Button(self, text='Always on top',
            command=self.handleTopmost)
        self.handleTopmostButton.grid()

        # Creating a button to quit the application
        self.quitButton = tk.Button(self, text='Quit',
            command=self.quit)
        self.quitButton.grid()
        # Creating a button to minimize the window
        self.minimizeButton = tk.Button(self, text='Minimize',
            command=self.minimized)
        self.minimizeButton.grid()
        

        
    def handle_fullscreen(self):
        if self.master.attributes('-fullscreen'):
            self.master.attributes('-fullscreen', 0)
        else:
            self.master.attributes('-fullscreen', 1)

    def handleTopmost(self):
        if self.master.attributes('-topmost'):
            self.master.attributes('-topmost', 0)
        else:
            self.master.attributes('-topmost', 1)

    def minimized(self):
      self.master.attributes('-zoomed', 0)
      self.master.iconify()


app = Application()
app.master.title('Sample application')

app.mainloop()