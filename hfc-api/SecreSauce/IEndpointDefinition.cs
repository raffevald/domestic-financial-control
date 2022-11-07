namespace hfc_api.SecreSauce
{
    public interface IEndpointDefinition {
        public void DefineEndPoints(WebApplication app);
        public void DefineServices(IServiceCollection services);
    }
}