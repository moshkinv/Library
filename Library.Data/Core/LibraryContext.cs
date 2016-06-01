using Library.Data.Models;
using System.Data.Entity;

namespace Library.Data.Core
{
    public class LibraryContext : DbContext
    {
        public LibraryContext() : base("Data Source=DESKTOP-8K6GN4A\\SQLEXPRESS; Initial Catalog=librarydb; Integrated Security=True")
        {
            Database.SetInitializer(new LibraryDbInitializer());
        }

        public DbSet<Book> Books { get; set; }
    }
}
