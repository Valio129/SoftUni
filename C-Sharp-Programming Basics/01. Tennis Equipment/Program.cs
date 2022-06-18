using System;

namespace _01._Tennis_Equipment
{
    class Program
    {
        static void Main(string[] args)
        {
            double tennisRacketPrice = double.Parse(Console.ReadLine());
            int tennisRacketCount = int.Parse(Console.ReadLine());
            int pairsOfSneakersCount = int.Parse(Console.ReadLine());

            double pairsOfSneakaersPrice = tennisRacketPrice / 6;
            double sum = tennisRacketPrice * tennisRacketCount + pairsOfSneakersCount * pairsOfSneakaersPrice;
            sum += sum * 0.2;
            Console.WriteLine($"Price to be paid by Djokovic {Math.Floor(sum / 8)}");
            Console.WriteLine($"Price to be paid by sponsors {Math.Ceiling((sum / 8) * 7)}");

        }
    }
}
