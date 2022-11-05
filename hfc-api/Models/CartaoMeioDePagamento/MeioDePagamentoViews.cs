using System.ComponentModel.DataAnnotations;

namespace hfc_api.Models.CartaoMeioDePagamento
{
  public class MeioDePagamentoViews {
    [Key]
    public int codigo { get; set; }
    public String? cartao { get; set; }
    public String? tipo { get; set; }
  }
}