﻿using Wordle.Api.Data;

namespace Wordle.Api.Dtos
{
    public class DateWordDto
    {
        public DateWordDto(DateWord dateWord)
        {
            DateWordId = dateWord.DateWordId;
            Date = dateWord.Date;
            TotalAttempts = dateWord.TotalAttempts;
            TotalSeconds = dateWord.TotalSeconds;
            TotalGames = dateWord.TotalGames;
            PreviousPlayers = dateWord.PreviousPlayers;
        }
        public int DateWordId { get; set; }
        public DateTime Date { get; set; }
        public int TotalAttempts { get; set; } = 0;
        public int TotalSeconds { get; set; } = 0;
        public int TotalGames { get; set; } = 0;
        public IList<Player> PreviousPlayers { get; set; }

        public double? AverageAttempts()
        {
            if (TotalGames == 0)
            {
                return 0.0; 
            }

            return TotalAttempts / TotalGames;
        }

        public double? AverageSecondsPerGame()
        {
            if (TotalGames == 0)
            {
                return 0.0;
            }

            return TotalSeconds / TotalGames;
        }
    }
}
