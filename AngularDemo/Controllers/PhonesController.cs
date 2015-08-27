using System.IO;
using System.Reflection;
using System.Web.Mvc;

namespace AngularDemo.Controllers
{
    public class PhonesController : Controller
    {
        public string GetPhone(string id)
        {
            var assembly = Assembly.GetExecutingAssembly();
            var textStreamReader = new StreamReader(assembly.GetManifestResourceStream(string.Format("AngularDemo.Resources.Phones.{0}.json", id)));
            return textStreamReader.ReadToEnd();
        }
    }
}