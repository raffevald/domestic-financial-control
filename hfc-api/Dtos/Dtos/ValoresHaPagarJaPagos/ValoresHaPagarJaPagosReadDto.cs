using System.ComponentModel.DataAnnotations;

namespace hfc_api.Dtos.Dtos.ValoresHaPagarJaPagos
{
  public class ValoresHaPagarJaPagosReadDto {
    public int codigo { get; set; }
    public DateTime data_pagamento  { get; set; }
    public DateTime data_cadastro  { get; set; }
    public float valor_pago { get; set; }
    public int fk_valores_ha_pagar { get; set; }
  }
}