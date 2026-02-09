import React from 'react'
import * as S from './styles'

export type Props = {
  ativo?: boolean
  contaador?: number
  legenda?: string
}

const FiltroCard = ({ ativo, contaador, legenda }: Props) => {
  return (
    <S.Card ativo={ativo}>
      <S.Contador>{contaador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
