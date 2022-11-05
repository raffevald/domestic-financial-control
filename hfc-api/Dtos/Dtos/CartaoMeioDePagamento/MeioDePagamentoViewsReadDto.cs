using System.ComponentModel.DataAnnotations;

namespace hfc_api.Dtos.Dtos.CartaoMeioDePagamento
{
  public class MeioDePagamentoViewsReadDto {
    public int codigo { get; set; }
    public String? cartao { get; set; }
    public String? tipo { get; set; }
  }
}