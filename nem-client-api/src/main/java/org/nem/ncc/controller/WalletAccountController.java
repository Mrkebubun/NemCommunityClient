package org.nem.ncc.controller;

import org.nem.core.model.Address;
import org.nem.ncc.addressbook.AccountLabels;
import org.nem.ncc.controller.requests.WalletNamePasswordBag;
import org.nem.ncc.controller.viewmodels.*;
import org.nem.ncc.services.*;
import org.nem.ncc.wallet.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class WalletAccountController {
	private final WalletServices walletServices;
	private final WalletMapper walletMapper;
	private final AccountMapper accountMapper;
	private final AccountLabels accountLabels;

	/**
	 * Handles requests related to the REST resource "wallet/account".
	 */
	@Autowired(required = true)
	public WalletAccountController(
			final WalletServices walletServices,
			final WalletMapper walletMapper,
			final AccountMapper accountMapper,
			final AccountLabels accountLabels) {
		this.walletServices = walletServices;
		this.walletMapper = walletMapper;
		this.accountMapper = accountMapper;
		this.accountLabels = accountLabels;
	}

	/**
	 * Adds a new account to the wallet.
	 *
	 * @param bag The request parameters.
	 * @return A view of the new account.
	 */
	@RequestMapping(value = "/wallet/account/new", method = RequestMethod.POST)
	public AccountViewModel addNewAccount(@RequestBody final WalletNamePasswordBag bag) {
		return this.addAccount(bag, new WalletAccount());
	}

	/**
	 * Adds an existing account to the wallet.
	 *
	 * @param bag The request parameters.
	 * @return A view of the new account.
	 */
	@RequestMapping(value = "/wallet/account/add", method = RequestMethod.POST)
	public AccountViewModel addExistingAccount(@RequestBody final WalletNamePasswordBag bag) {
		return this.addAccount(bag, new WalletAccount(bag.getAccountPrivateKey()));
	}

	private AccountViewModel addAccount(final WalletNamePasswordBag bag, final WalletAccount account) {
		final Wallet wallet = this.walletServices.open(bag);
		wallet.addOtherAccount(account);

		final String label = bag.getAccountLabelOrDefault();
		if (null != label) {
			this.accountLabels.setLabel(account.getAddress(), null, label);
		}

		return this.accountMapper.toViewModel(account);
	}

	/**
	 * Sets an existing account to be the primary account.
	 *
	 * @param bag The request parameters.
	 * @return A view of the updated wallet.
	 */
	@RequestMapping(value = "/wallet/account/primary", method = RequestMethod.POST)
	public WalletViewModel setPrimaryAccount(@RequestBody final WalletNamePasswordBag bag) {
		final Wallet wallet = this.walletServices.open(bag);
		wallet.setPrimaryAccount(bag.getAccountAddress());
		return this.walletMapper.toViewModel(wallet);
	}

	/**
	 * Removes an existing account from a wallet.
	 *
	 * @param bag The request parameters.
	 * @return A view of the updated wallet.
	 */
	@RequestMapping(value = "/wallet/account/remove", method = RequestMethod.POST)
	public WalletViewModel removeAccount(@RequestBody final WalletNamePasswordBag bag) {
		final Wallet wallet = this.walletServices.open(bag);
		wallet.removeAccount(bag.getAccountAddress());
		return this.walletMapper.toViewModel(wallet);
	}

	// TODO 2015 J-B: does it make sense to store wallet account labels in the address book (not sure just a question)?
	// TODO 20150116 BR -> J: i thought that is the sole reason for having an address book for each wallet? all the methods/structures that
	// > right now still use labels from the wallet are only there for being backward compatible for a few releases.
	// (you think (because of blockchain restart) we don't have to be backward compatible?)
	// TODO 20150118 J-B: 'you think (because of blockchain restart) we don't have to be backward compatible' - yes

	/**
	 * Updates the label of an existing account.
	 *
	 * @param bag The request parameters.
	 * @return A view of the updated wallet.
	 */
	@RequestMapping(value = "/wallet/account/label", method = RequestMethod.POST)
	public AccountViewModel setAccountLabel(@RequestBody final WalletNamePasswordBag bag) {
		final Address address = bag.getAccountAddress();
		final String label = bag.getAccountLabelOrDefault();
		this.accountLabels.setLabel(address, null, label);
		return this.accountMapper.toViewModel(address);
	}
}
