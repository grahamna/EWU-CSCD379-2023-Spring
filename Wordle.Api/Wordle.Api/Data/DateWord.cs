﻿namespace Wordle.Api.Data
{
    public class DateWord
    {
        public int DateWordId { get; set; }
        public DateTime Date { get; set; }
        public int WordId { get; set; }
        public Word Word { get; set; } = null!;
        public int TotalAttempts { get; set; } = 0;
        public int TotalSeconds { get; set; } = 0;
        public int TotalGames { get; set; } = 0;

        public IList<Player> PreviousPlayers { get; set; } = new List<Player>();
        public ICollection<PlayerGame> PlayerGames { get; } = null!;
    }
}

