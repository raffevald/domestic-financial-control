using System.ComponentModel.DataAnnotations;

namespace hfc_api.Dtos.Dtos.ValoresHaPagarJaPagos
{
  public class ValoresHaPagarJaPagosCreateDto {
    [Key]
    public int codigo { get; set; }
    [Required]
    public DateTime data_pagamento  { get; set; }
    [Required]
    public DateTime data_cadastro  { get; set; }
    [Required]
    public float valor_pago {get; set; }
    [Required]
    public int fk_valores_ha_pagar {get; set; }
    [Required]
    public int fk_usuario { get; set; }
  }
}
