using Library.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Library.Data.Models;

namespace Library.Controllers.Api
{
    public class BooksController : ApiController
    {
        UnitOfWork UoW = new UnitOfWork();

        // GET api/<controller>
        public IEnumerable<Book> Get()
        {
            // get all books except hidden  
            return UoW.BooksRepository.Get().Where(b => b.IsVisible == true);
        }

        // GET api/<controller>/5
        public Book Get(int id)
        {
            return UoW.BooksRepository.Get(b => b.Id == id).First();
        }

        // POST api/<controller>
        public void Post(Book book)
        {
            UoW.BooksRepository.Insert(book);
            UoW.Save();
        }

        // PUT api/<controller>/5
        public void Put(Book book)
        {
            UoW.BooksRepository.Update(book);
            UoW.Save();
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            UoW.BooksRepository.Delete(id);
            UoW.Save();
        }
    }
}