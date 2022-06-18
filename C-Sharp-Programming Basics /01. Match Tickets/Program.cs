using System;

namespace _01._Match_Tickets
{
    class Program
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());
            string category = Console.ReadLine();
            int peopleCount = int.Parse(Console.ReadLine());
            double ticketPrice = 0;

            if (peopleCount < 5)
            {
                budget -= budget * 0.75;
            }
            else if (peopleCount < 10)
            {
                budget -= budget * 0.6;
            }
            else if (peopleCount < 25)
            {
                budget -= budget * 0.5;
            }
            else if (peopleCount < 50)
            {
                budget -= budget * 0.4;
            }
            else
            {
                budget -= budget * 0.25;
            }

            switch (category)
            {
                case "VIP":
                    ticketPrice = 499.99;

                    break;
                case "Normal":
                    ticketPrice = 249.99;
                    break;
            }
            double sumPrice = ticketPrice * peopleCount;
            double diff = sumPrice - budget;
            Console.WriteLine(sumPrice <budget? $"Yes! You have {budget - sumPrice:f2} leva left." : $"Not enough money! You need {sumPrice- budget:f2} leva.");
        }
    }
}
