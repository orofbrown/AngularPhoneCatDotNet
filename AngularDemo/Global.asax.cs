using System.Web.Routing;
using AngularDemo.App_Start;

namespace RulesManager.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

        //protected void Application_BeginRequest(Object source, EventArgs e)
        //{
        //    InitializeApplication.Initialize();
        //}

        //static class InitializeApplication
        //{
        //    private static bool _initializedAlready;
        //    private static readonly Object Lock = new Object();

        //    // Initialize only on the first request
        //    public static void Initialize()
        //    {
        //        if (_initializedAlready)
        //        {
        //            return;
        //        }
        //        lock (Lock)
        //        {
        //            if (_initializedAlready)
        //                return;
        //            _initializedAlready = true;
        //        }
        //    }
        //}
    }
}