using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RPSLS
{
    class Player
    {
        //member variables (has a)
        public string name;
        public bool isWinner;
        public int score;
        public string playerOption;

        //constructor (spawner)
        public Player(string name)   
        {
            this.name = name;
            this.isWinner = false;
            this.playerOption = "";
            this.score = 0;
        }

        //members method (can do)

        public string playerOptions() 
        {
            Console.WriteLine("Choose your weapon: Rock, Paper, Scissor, Lizzard, or Spock");
            Console.ReadLine();

            return playerOption;
        }
    }
}


