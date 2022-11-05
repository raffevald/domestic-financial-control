using AutoMapper;
using hfc_api.Dtos.Dtos.CartaoMeioDePagamento;
using hfc_api.Models.CartaoMeioDePagamento;

namespace hfc_api.Profiles
{
  public class CartaoProfiles : Profile {
    public CartaoProfiles()
    {
      // Source -> Target
      CreateMap<Cartao, CartaoReadDto>();
      CreateMap<CartaoCreateDto, Cartao>();
      CreateMap<CartaoUpdateDto, Cartao>();
    }
  }
}