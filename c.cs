using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
 
namespace ChessBoard
{
    public partial class Form1 : Form
    {
        public Form1()
        
        {
            InitializeComponent();
        }
        private Panel[,] _chessBoardPanels;
        private void Form1_Load(object sender, EventArgs e)
        {
            const int tileSize = 80;
            const int gridSize = 8;
            var clr1 = Color.Black;
            var clr2 = Color.White;
 
            this.Width = 658;
            this.Height = 680;
            this.Text = "csharp-console-examples.com";
 
            // initialize the "chess board"
            _chessBoardPanels = new Panel[gridSize, gridSize];
 
            // double for loop to handle all rows and columns
            for (var n = 0; n < 8; n++)
            {
                for (var m = 0; m < 8; m++)
                {
                    // create new Panel control which will be one 
                    // chess board tile
                    var newPanel = new Panel
                    {
                        Size = new Size(tileSize, tileSize),
                        Location = new Point(tileSize * n, tileSize * m)
                    };
 
                    // add to Form's Controls so that they show up
                    Controls.Add(newPanel);
 
                    // add to our 2d array of panels for future use
                    _chessBoardPanels[n, m] = newPanel;
 
                    // color the backgrounds
                    if ((n + m) % 2 == 0)
                    {
                        newPanel.BackColor = clr1;
                    }
                    else
                    {
                        newPanel.BackColor = clr2;
                    }
                    
                }
            }
        }
    }
}