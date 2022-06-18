using System;

namespace _02._Add_Bags
{
    class Program
    {
        static void Main(string[] args)
        {
            double luggageOver20Price = double.Parse(Console.ReadLine());
            double luggageWeight = double.Parse(Console.ReadLine());
            int daysUntilTakeOff = int.Parse(Console.ReadLine());
            int luggageCount = int.Parse(Console.ReadLine());

            double luggagePrice = 0;
            if (luggageWeight < 10 && luggageWeight > 0)
            {
                luggagePrice = luggageOver20Price * 0.2;
            }
            else if (luggageWeight >= 10 && luggageWeight <= 20)
            {
                luggagePrice = luggageOver20Price / 2;
            }
            else if (luggageWeight > 20) 
            {
                luggagePrice = luggageOver20Price;
            }

            if (daysUntilTakeOff < 7 && daysUntilTakeOff > 0)
            {
                luggagePrice += luggagePrice * 0.4;
            }
            else if (daysUntilTakeOff >= 7 && daysUntilTakeOff <= 30)
            {
                luggagePrice += luggagePrice * 0.15;

            }
            else if (daysUntilTakeOff > 30)
            {
                luggagePrice += luggagePrice * 0.1;
            }

            double result = luggagePrice * luggageCount;
            Console.WriteLine($"The total price of bags is: {result:F2} lv. ");

        }
    }
}
// Грешка в iF- овете !!! Трябва да е < 10, a не <= защо то после има диапазон между 10 и 20. ДА СЛЕДЯ ВНИМАТЕЛНО IF Условията!