export interface ResponseCoinsApi {
  status: Status;
  data: Coin[];
}

export interface Status {
  elapsed: number;
  timestamp: string;
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  slug: string;
  contract_addresses?: ContractAddress[];
  _internal_temp_agora_id: string;
  metrics: Metrics;
  profile: Profile;
  favorite?: boolean;
}

export interface ContractAddress {
  platform: string;
  contract_address: string;
}

export interface Metrics {
  market_data: MarketData;
  marketcap: Marketcap;
  supply: Supply;
  blockchain_stats_24_hours: BlockchainStats24Hours;
  market_data_liquidity: MarketDataLiquidity;
  all_time_high: AllTimeHigh;
  cycle_low: CycleLow;
  token_sale_stats: TokenSaleStats;
  staking_stats: StakingStats;
  mining_stats: MiningStats;
  developer_activity: DeveloperActivity;
  roi_data: RoiData;
  roi_by_year: RoiByYear;
  risk_metrics: RiskMetrics;
  misc_data: MiscData;
  reddit: Reddit;
  on_chain_data: OnChainData;
  exchange_flows: ExchangeFlows;
  miner_flows: MinerFlows;
  supply_activity: SupplyActivity;
  supply_distribution: SupplyDistribution;
  alert_messages: any;
}

export interface MarketData {
  price_usd: number;
  price_btc: number;
  price_eth: number;
  volume_last_24_hours: number;
  real_volume_last_24_hours: number;
  volume_last_24_hours_overstatement_multiple: number;
  percent_change_usd_last_1_hour: number;
  percent_change_btc_last_1_hour: number;
  percent_change_eth_last_1_hour: number;
  percent_change_usd_last_24_hours: number;
  percent_change_btc_last_24_hours: number;
  percent_change_eth_last_24_hours: number;
  ohlcv_last_1_hour: OhlcvLast1Hour;
  ohlcv_last_24_hour: OhlcvLast24Hour;
  last_trade_at: string;
}

export interface OhlcvLast1Hour {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface OhlcvLast24Hour {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface Marketcap {
  rank: number;
  marketcap_dominance_percent: number;
  current_marketcap_usd: number;
  y_2050_marketcap_usd?: number;
  y_plus10_marketcap_usd?: number;
  liquid_marketcap_usd?: number;
  volume_turnover_last_24_hours_percent?: number;
  realized_marketcap_usd?: number;
  outstanding_marketcap_usd?: number;
}

export interface Supply {
  y_2050?: number;
  y_plus10?: number;
  liquid?: number;
  circulating: number;
  y_2050_issued_percent?: number;
  annual_inflation_percent?: number;
  stock_to_flow?: number;
  y_plus10_issued_percent?: number;
  supply_revived_90d?: number;
}

export interface BlockchainStats24Hours {
  count_of_active_addresses?: number;
  transaction_volume?: number;
  adjusted_transaction_volume?: number;
  adjusted_nvt?: number;
  median_tx_value?: number;
  median_tx_fee?: number;
  count_of_tx?: number;
  count_of_payments?: number;
  new_issuance?: number;
  average_difficulty?: number;
  kilobytes_added: any;
  count_of_blocks_added?: number;
}

export interface MarketDataLiquidity {
  clearing_prices_to_sell: any;
  marketcap: any;
  asset_bid_depth: any;
  usd_bid_depth: any;
  updated_at: string;
}

export interface AllTimeHigh {
  price?: number;
  at?: string;
  days_since?: number;
  percent_down?: number;
  breakeven_multiple?: number;
}

export interface CycleLow {
  price?: number;
  at?: string;
  percent_up?: number;
  days_since?: number;
}

export interface TokenSaleStats {
  sale_proceeds_usd: any;
  sale_start_date: any;
  sale_end_date: any;
  roi_since_sale_usd_percent: any;
  roi_since_sale_btc_percent: any;
  roi_since_sale_eth_percent: any;
}

export interface StakingStats {
  staking_type?: string;
  staking_yield_percent?: number;
  real_staking_yield_percent?: number;
  staking_minimum: any;
  tokens_staked?: number;
  tokens_staked_percent?: number;
  staking_engaged_balance?: number;
  staked_total_percent?: number;
  staking_options?: StakingOption[];
}

export interface StakingOption {
  name: string;
  reward: number;
  adjusted_reward: number;
}

export interface MiningStats {
  mining_algo?: string;
  network_hash_rate?: string;
  available_on_nicehash_percent?: number;
  '1_hour_attack_cost': any;
  '24_hours_attack_cost': any;
  attack_appeal: any;
  hash_rate?: number;
  hash_rate_30d_average?: number;
  mining_revenue_per_hash_usd?: number;
  mining_revenue_per_hash_native_units?: number;
  mining_revenue_per_hash_per_second_usd?: number;
  mining_revenue_per_hash_per_second_native_units?: number;
  mining_revenue_from_fees_percent_last_24_hours?: number;
  mining_revenue_native?: number;
  mining_revenue_usd: any;
  mining_revenue_total?: number;
  average_difficulty?: number;
}

export interface DeveloperActivity {
  stars?: number;
  watchers?: number;
  commits_last_3_months: any;
  commits_last_1_year: any;
  lines_added_last_3_months: any;
  lines_added_last_1_year: any;
  lines_deleted_last_3_months: any;
  lines_deleted_last_1_year: any;
}

export interface RoiData {
  percent_change_last_1_week: number;
  percent_change_last_1_month: number;
  percent_change_last_3_months: number;
  percent_change_last_1_year?: number;
  percent_change_btc_last_1_week: number;
  percent_change_btc_last_1_month: number;
  percent_change_btc_last_3_months: number;
  percent_change_btc_last_1_year?: number;
  percent_change_eth_last_1_week: number;
  percent_change_eth_last_1_month: number;
  percent_change_eth_last_3_months: number;
  percent_change_eth_last_1_year?: number;
  percent_change_month_to_date: number;
  percent_change_quarter_to_date: number;
  percent_change_year_to_date: number;
}

export interface RoiByYear {
  '2020_usd_percent'?: number;
  '2019_usd_percent'?: number;
  '2018_usd_percent'?: number;
  '2017_usd_percent'?: number;
  '2016_usd_percent'?: number;
  '2015_usd_percent'?: number;
  '2014_usd_percent'?: number;
  '2013_usd_percent'?: number;
  '2012_usd_percent'?: number;
  '2011_usd_percent'?: number;
}

export interface RiskMetrics {
  sharpe_ratios: SharpeRatios;
  volatility_stats: VolatilityStats;
}

export interface SharpeRatios {
  last_30_days: number;
  last_90_days: number;
  last_1_year: number;
  last_3_years?: number;
}

export interface VolatilityStats {
  volatility_last_30_days: number;
  volatility_last_90_days: number;
  volatility_last_1_year: number;
  volatility_last_3_years?: number;
}

export interface MiscData {
  private_market_price_usd?: number;
  vladimir_club_cost: any;
  btc_current_normalized_supply_price_usd: any;
  btc_y2050_normalized_supply_price_usd: any;
  asset_created_at: any;
  asset_age_days: any;
  categories?: string[];
  sectors?: string[];
  tags?: string[];
}

export interface Reddit {
  active_user_count?: number;
  subscribers?: number;
}

export interface OnChainData {
  addresses_count?: number;
  active_addresses?: number;
  active_addresses_received_count?: number;
  active_addresses_sent_count?: number;
  addresses_balance_greater_0_001_native_units_count?: number;
  addresses_balance_greater_0_01_native_units_count?: number;
  addresses_balance_greater_0_1_native_units_count?: number;
  addresses_balance_greater_1_usd_count?: number;
  addresses_balance_greater_1_native_units_count?: number;
  addresses_balance_greater_10_usd_count?: number;
  addresses_balance_greater_10_native_units_count?: number;
  addresses_balance_greater_100_usd_count?: number;
  addresses_balance_greater_100_native_units_count?: number;
  addresses_balance_greater_100k_usd_count?: number;
  addresses_balance_greater_100k_native_units_count?: number;
  addresses_balance_greater_10k_usd_count?: number;
  addresses_balance_greater_10k_native_units_count?: number;
  addresses_balance_greater_10m_usd_count?: number;
  addresses_balance_greater_1k_usd_count?: number;
  addresses_balance_greater_1k_native_units_count?: number;
  addresses_balance_greater_1m_usd_count?: number;
  addresses_balance_greater_1m_native_units_count?: number;
  average_block_gas_limit?: number;
  block_height?: number;
  average_block_interval?: number;
  blocks_added_last_24_hours?: number;
  block_size_bytes_total?: number;
  block_size_bytes_average?: number;
  uncle_blocks_count_last_24_hours?: number;
  uncle_rewards_last_24_hours_usd?: number;
  uncle_rewards_last_24_hours_native_units?: number;
  mining_revenue_from_uncle_blocks_percent_last_24_hours?: number;
  block_weight?: number;
  average_block_weight?: number;
  total_fees_last_24_hours?: number;
  total_fees_last_24_hours_usd?: number;
  hash_rate?: number;
  issuance_last_24_hours_native_units?: number;
  issuance_rate_daily?: number;
  issuance_total_usd?: number;
  issuance_total_native_units?: number;
  new_issuance?: number;
  issuance_rate?: number;
  realized_marketcap_usd?: number;
  adjusted_nvt?: number;
  adjusted_nvt_90d_moving_average?: number;
  adjusted_rvt?: number;
  adjusted_rvt_90d_moving_average?: number;
  txn_count_last_24_hours?: number;
  txn_contracts_calls_count_last_24_hours?: number;
  txn_contracts_calls_success_count_last_24_hours?: number;
  txn_contracts_creation_count_last_24_hours?: number;
  txn_contracts_destruction_count_last_24_hours?: number;
  txn_contracts_count_last_24_hours?: number;
  txn_erc20_count_last_24_hours?: number;
  txn_erc721_count_last_24_hours?: number;
  txn_per_second_count?: number;
  txn_token_count_last_24_hours?: number;
  average_fee_usd?: number;
  average_fee_native_units?: number;
  median_fee_usd?: number;
  median_fee_native_units?: number;
  average_txn_gas_used?: number;
  txn_gas_limit_last_24_hours?: number;
  average_txn_gas_limit?: number;
  txn_gas_used_last_24_hours?: number;
  transfer_count_last_24_hours?: number;
  transfer_erc_20_count_last_24_hours?: number;
  transfer_erc721_count_last_24_hours?: number;
  txn_volume_last_24_hours_usd?: number;
  adjusted_txn_volume_last_24_hours_usd?: number;
  adjusted_txn_volume_last_24_hours_native_units?: number;
  txn_volume_last_24_hours_native_units?: number;
  average_transfer_value_usd?: number;
  average_transfer_value_native_units?: number;
  median_transfer_value_usd?: number;
  median_transfer_value_native_units?: number;
  average_utxo_age?: number;
  value_weighted_average_utxo_age?: number;
  median_utxo_age?: number;
  utxo_count_last_24_hours?: number;
  utxo_in_loss_count?: number;
  utxo_in_profit_count?: number;
}

export interface ExchangeFlows {
  flow_in_exchange_native_units?: number;
  flow_in_exchange_usd?: number;
  flow_in_exchange_native_units_inclusive?: number;
  flow_in_exchange_usd_inclusive?: number;
  flow_out_exchange_native_units?: number;
  flow_out_exchange_usd?: number;
  flow_out_exchange_native_units_inclusive?: number;
  flow_out_exchange_usd_inclusive?: number;
  flow_in_binance_usd?: number;
  flow_in_binance_native_units?: number;
  flow_in_bitfinex_usd?: number;
  flow_in_bitfinex_native_units?: number;
  flow_in_bitmex_usd?: number;
  flow_in_bitmex_native_units?: number;
  flow_in_bitstamp_usd?: number;
  flow_in_bitstamp_native_units?: number;
  flow_in_bittrex_usd?: number;
  flow_in_bittrex_native_units?: number;
  flow_in_gemini_usd?: number;
  flow_in_gemini_native_units?: number;
  flow_in_huobi_usd?: number;
  flow_in_huobi_native_units?: number;
  flow_in_kraken_usd?: number;
  flow_in_kraken_native_units?: number;
  flow_in_poloniex_usd?: number;
  flow_in_poloniex_native_units?: number;
  flow_net_binance_usd?: number;
  flow_net_binance_native_units?: number;
  flow_net_bitfinex_usd?: number;
  flow_net_bitfinex_native_units?: number;
  flow_net_bitmex_usd?: number;
  flow_net_bitmex_native_units?: number;
  flow_net_bitstamp_usd?: number;
  flow_net_bitstamp_native_units?: number;
  flow_net_bittrex_usd?: number;
  flow_net_bittrex_native_units?: number;
  flow_net_gemini_usd?: number;
  flow_net_gemini_native_units?: number;
  flow_net_huobi_usd?: number;
  flow_net_huobi_native_units?: number;
  flow_net_kraken_usd?: number;
  flow_net_kraken_native_units?: number;
  flow_net_poloniex_usd?: number;
  flow_net_poloniex_native_units?: number;
  flow_out_binance_usd?: number;
  flow_out_binance_native_units?: number;
  flow_out_bitfinex_usd?: number;
  flow_out_bitfinex_native_units?: number;
  flow_out_bitmex_usd?: number;
  flow_out_bitmex_native_units?: number;
  flow_out_bitstamp_usd?: number;
  flow_out_bitstamp_native_units?: number;
  flow_out_bittrex_usd?: number;
  flow_out_bittrex_native_units?: number;
  flow_out_gemini_usd?: number;
  flow_out_gemini_native_units?: number;
  flow_out_huobi_usd?: number;
  flow_out_huobi_native_units?: number;
  flow_out_kraken_usd?: number;
  flow_out_kraken_native_units?: number;
  flow_out_poloniex_usd?: number;
  flow_out_poloniex_native_units?: number;
  supply_exchange_native_units?: number;
  supply_exchange_usd?: number;
  supply_binance_usd?: number;
  supply_binance_native_units?: number;
  supply_bitfinex_usd?: number;
  supply_bitfinex_native_units?: number;
  supply_bitmex_usd?: number;
  supply_bitmex_native_units?: number;
  supply_bitstamp_usd?: number;
  supply_bitstamp_native_units?: number;
  supply_bittrex_usd?: number;
  supply_bittrex_native_units?: number;
  supply_gemini_usd?: number;
  supply_gemini_native_units?: number;
  supply_huobi_usd?: number;
  supply_huobi_native_units?: number;
  supply_kraken_usd?: number;
  supply_kraken_native_units?: number;
  supply_poloniex_usd?: number;
  supply_poloniex_native_units?: number;
}

export interface MinerFlows {
  supply_1hop_miners_usd?: number;
  supply_1hop_miners_native_units?: number;
  supply_miners_usd?: number;
  supply_miners_native_units?: number;
}

export interface SupplyActivity {
  supply_active_10y?: number;
  supply_active_180d?: number;
  supply_active_1d?: number;
  supply_active_1y?: number;
  supply_active_1y_percent?: number;
  supply_active_2y?: number;
  supply_active_30d?: number;
  supply_active_3y?: number;
  supply_active_4y?: number;
  supply_active_5y?: number;
  supply_active_7d?: number;
  supply_active_90d?: number;
  supply_active_ever?: number;
  outstanding?: number;
  supply_revived_1y?: number;
  supply_revived_2y?: number;
  supply_revived_30d?: number;
  supply_revived_3y?: number;
  supply_revived_4y?: number;
  supply_revived_5y?: number;
  supply_revived_7d?: number;
  supply_revived_90d?: number;
}

export interface SupplyDistribution {
  supply_in_addresses_balance_greater_0_001_native_units?: number;
  supply_in_addresses_balance_greater_0_01_native_units?: number;
  supply_in_addresses_balance_greater_0_1_native_units?: number;
  supply_in_addresses_balance_greater_1_usd?: number;
  supply_in_addresses_balance_greater_10_usd?: number;
  supply_in_addresses_balance_greater_100_usd?: number;
  supply_in_addresses_balance_greater_100k_usd?: number;
  supply_in_addresses_balance_greater_100k_native_units?: number;
  supply_in_addresses_balance_greater_100_native_units?: number;
  supply_in_addresses_balance_greater_10k_usd?: number;
  supply_in_addresses_balance_greater_10k_native_units?: number;
  supply_in_addresses_balance_greater_10m_usd?: number;
  supply_in_addresses_balance_greater_10_native_units?: number;
  supply_in_addresses_balance_greater_1k_usd?: number;
  supply_in_addresses_balance_greater_1k_native_units?: number;
  supply_in_addresses_balance_greater_1m_usd?: number;
  supply_in_addresses_balance_greater_1m_native_units?: number;
  supply_in_addresses_balance_greater_1_native_units?: number;
  supply_in_contracts_usd?: number;
  supply_in_contracts_native_units?: number;
  supply_shielded: any;
  supply_in_top_100_addresses?: number;
  supply_in_top_10_percent_addresses?: number;
  supply_in_top_1_percent_addresses?: number;
  supply_in_utxo_in_loss?: number;
  supply_in_utxo_in_profit?: number;
}

export interface Profile {
  general: General;
  contributors: Contributors;
  advisors: Advisors;
  investors: Investors;
  ecosystem: Ecosystem;
  economics: Economics;
  technology: Technology;
  governance: Governance;
  metadata: Metadata;
}

export interface General {
  overview: Overview;
  background: Background;
  roadmap: Roadmap[];
  regulation: Regulation;
}

export interface Overview {
  is_verified: boolean;
  tagline?: string;
  category?: string;
  sector?: string;
  tags?: string;
  project_details?: string;
  official_links: OfficialLink[];
}

export interface OfficialLink {
  name?: string;
  link?: string;
}

export interface Background {
  background_details?: string;
  issuing_organizations: IssuingOrganization[];
}

export interface IssuingOrganization {
  slug: string;
  name: string;
  logo: string;
  description?: string;
}

export interface Roadmap {
  title: string;
  date?: string;
  type?: string;
  details?: string;
}

export interface Regulation {
  regulatory_details?: string;
  sfar_score?: number;
  sfar_summary?: string;
}

export interface Contributors {
  individuals: Individual[];
  organizations: Organization[];
}

export interface Individual {
  slug: string;
  first_name: string;
  last_name: string;
  title: string;
  description?: string;
  avatar_url?: string;
}

export interface Organization {
  slug: string;
  name: string;
  logo?: string;
  description?: string;
}

export interface Advisors {
  individuals: Individual2[];
  organizations: Organization2[];
}

export interface Individual2 {
  slug: string;
  first_name: string;
  last_name: string;
  title: string;
  description?: string;
  avatar_url: string;
}

export interface Organization2 {
  slug: string;
  name: string;
  logo?: string;
  description: string;
}

export interface Investors {
  individuals: Individual3[];
  organizations: Organization3[];
}

export interface Individual3 {
  slug: string;
  first_name: string;
  last_name: string;
  title: string;
  description?: string;
  avatar_url: string;
}

export interface Organization3 {
  slug: string;
  name: string;
  logo?: string;
  description?: string;
}

export interface Ecosystem {
  assets: Asset[];
  organizations: Organization4[];
}

export interface Asset {
  id: string;
  name: string;
}

export interface Organization4 {
  slug: string;
  name: string;
  logo: string;
  description: string;
}

export interface Economics {
  token: Token;
  launch: Launch;
  consensus_and_emission: ConsensusAndEmission;
  native_treasury: NativeTreasury;
}

export interface Token {
  token_name: string;
  token_type?: string;
  token_address?: string;
  block_explorers?: BlockExplorer[];
  multitoken: any[];
  token_usage?: string;
  token_usage_details?: string;
}

export interface BlockExplorer {
  name: string;
  link: string;
}

export interface Launch {
  general: General2;
  fundraising: Fundraising;
  initial_distribution: InitialDistribution;
}

export interface General2 {
  launch_style?: string;
  launch_details?: string;
}

export interface Fundraising {
  sales_rounds: SalesRound[];
  sales_documents?: SalesDocument[];
  sales_treasury_accounts: SalesTreasuryAccount[];
  treasury_policies?: any[];
  projected_use_of_sales_proceeds: ProjectedUseOfSalesProceed[];
}

export interface SalesRound {
  title: string;
  start_date?: string;
  type: string;
  details?: string;
  end_date?: string;
  native_tokens_allocated?: number;
  asset_collected?: string;
  price_per_token_in_asset?: number;
  equivalent_price_per_token_in_usd?: number;
  amount_collected_in_asset?: number;
  amount_collected_in_usd?: number;
  is_kyc_required?: boolean;
  restricted_jurisdictions?: string[];
}

export interface SalesDocument {
  name: string;
  link: string;
}

export interface SalesTreasuryAccount {
  account_type?: string;
  asset_held: AssetHeld;
  addresses: Address[];
  security: any;
}

export interface AssetHeld {
  id: any;
  name?: string;
}

export interface Address {
  name: string;
  link: string;
}

export interface ProjectedUseOfSalesProceed {
  category?: string;
  amount_in_percentage?: number;
}

export interface InitialDistribution {
  initial_supply?: number;
  initial_supply_repartition: InitialSupplyRepartition;
  token_distribution_date?: string;
  genesis_block_date?: string;
}

export interface InitialSupplyRepartition {
  allocated_to_investors_percentage?: number;
  allocated_to_organization_or_founders_percentage?: number;
  allocated_to_premined_rewards_or_airdrops_percentage?: number;
}

export interface ConsensusAndEmission {
  supply: Supply2;
  consensus: Consensus;
}

export interface Supply2 {
  supply_curve_details: string;
  general_emission_type?: string;
  precise_emission_type?: string;
  is_capped_supply?: boolean;
  max_supply?: number;
}

export interface Consensus {
  consensus_details: string;
  general_consensus_mechanism?: string;
  precise_consensus_mechanism?: string;
  targeted_block_time?: number;
  block_reward?: number;
  mining_algorithm?: string;
  next_halving_date?: string;
  is_victim_of_51_percent_attack?: boolean;
}

export interface NativeTreasury {
  accounts: any[];
  treasury_usage_details: any;
}

export interface Technology {
  overview: Overview2;
  security: Security;
}

export interface Overview2 {
  technology_details?: string;
  client_repositories: ClientRepository[];
}

export interface ClientRepository {
  name: string;
  link: string;
  license_type?: string;
}

export interface Security {
  audits: Audit[];
  known_exploits_and_vulnerabilities: KnownExploitsAndVulnerability[];
}

export interface Audit {
  title: string;
  date?: string;
  type?: string;
  details?: string;
}

export interface KnownExploitsAndVulnerability {
  title: string;
  date: string;
  type?: string;
  details: string;
}

export interface Governance {
  governance_details?: string;
  onchain_governance: OnchainGovernance;
  grants: Grant[];
}

export interface OnchainGovernance {
  onchain_governance_type?: string;
  onchain_governance_details?: string;
  is_treasury_decentralized?: boolean;
}

export interface Grant {
  funding_organizations: any;
  grant_program_details: string;
}

export interface Metadata {
  updated_at: string;
}
