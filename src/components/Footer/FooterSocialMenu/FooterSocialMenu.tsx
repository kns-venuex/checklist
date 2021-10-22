import React, { FC } from 'react';
import cx from 'classnames';

import Icon from '../../Icon';
import LinkSecondaryAsAnchor from '../../links/LinkSecondary/LinkSecondaryAsAnchor';

import './c-footer-social-menu.scss';

interface Props {
  className?: string;
}

const FooterSocialMenu: FC<Props> = ({ className }) => (
  <ul className={cx('c-footer-social-menu', className)}>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor
        href="https://www.instagram.com/venuexio/"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="u-display-block" name="instagram" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor
        href="https://www.linkedin.com/company/venuexio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Icon className="u-display-block" name="linkedin" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor
        href="https://www.youtube.com/channel/UCZBCN9x8MYqCe1WUoVRJboA"
        aria-label="YouTube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="u-display-block" name="youtube" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor
        href="https://github.com/kns-venuex"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="u-display-block" name="github" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor
        href="https://twitter.com/venuexio"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="u-display-block" name="twitter" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor
        href="https://www.facebook.com/venuexio"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="u-display-block" name="facebook" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
  </ul>
);

export default FooterSocialMenu;
