using System;

namespace _01._Birthday_Party
{
    class Program
    {
        static void Main(string[] args)
        {
            int bitcoin = int.Parse(Console.ReadLine());
            double juan = double.Parse(Console.ReadLine());
            double commision = (double.Parse(Console.ReadLine())) / 100;

            double inLevaBTC = (double)bitcoin * 1168;
            
            double JUANtoEU  = (juan* 0.15* 1.76)  / 1.95;

            double BTCtoEU  = inLevaBTC / 1.95; 
            double sum = BTCtoEU + JUANtoEU;
            sum -= sum * commision;
            Console.WriteLine($"{sum:f2}");
            
        }
    }
}
