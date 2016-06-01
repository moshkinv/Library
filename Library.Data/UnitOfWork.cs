using System;
using Library.Data.Models;
using Library.Data.Repository;
using Library.Data.Core;

namespace Library.Data
{
    public class UnitOfWork : IDisposable
    {
        private LibraryContext context = new LibraryContext();
        private GenericRepository<Book> booksRepository;

        public GenericRepository<Book> BooksRepository
        {
            get
            {
                if (booksRepository == null)
                {
                    booksRepository = new GenericRepository<Book>(context);
                }

                return booksRepository;
            }
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public void Dispose()
        {
            context.Dispose();
        }
    }
}