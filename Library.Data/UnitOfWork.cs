using System;
using Library.Data.Models;
using Library.Data.Repository;
using Library.Data.Core;

namespace Library.Data
{
    public class UnitOfWork : IDisposable
    {
        private LibraryContext context = new LibraryContext();
        private GenericRepository<Book> _booksRepository;

        public GenericRepository<Book> BooksRepository
        {
            get
            {
                if (this._booksRepository == null)
                {
                    this._booksRepository = new GenericRepository<Book>(context);
                }

                return _booksRepository;
            }
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}