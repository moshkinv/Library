using Library.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Core
{
    class LibraryDbInitializer : DropCreateDatabaseAlways<LibraryContext>
    {
        protected override void Seed(LibraryContext context)
        {
            IList<Book> seedBooks = new List<Book>();

            seedBooks.Add(new Book() { Author = "Steve McConnell", InventaryNumber = 112423, Title = "Code Complete", Year = 2003});
            seedBooks.Add(new Book() { Author = "Robert C. Martin", InventaryNumber = 145326, Title = "Clean Code", Year = 2008});
            seedBooks.Add(new Book() { Author = "Jon Bentley", InventaryNumber = 85634, Title = "Programming Perls", Year = 2004});
            seedBooks.Add(new Book() { Author = "Michael Feathers", InventaryNumber = 26235, Title = "Working Effectively with Legacy Code", Year = 2003});
            seedBooks.Add(new Book() { Author = "Robert Pirsig", InventaryNumber = 45274, Title = "Zen and the Art of Motorcycle Maintenance", Year = 2000});

            foreach (var book in seedBooks)
                context.Books.Add(book);

            context.SaveChanges();
        }
    }
}
