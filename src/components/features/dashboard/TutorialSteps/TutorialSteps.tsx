import type { FC } from 'react';

import {
  BookIcon,
  CreditCardIcon,
  LeafIcon,
  ProfileIcon,
  TouchIcon,
} from '@/components/common/icons';
import { SignboardContainer } from '@/components/common/SignboardContainer';
import { Stepper } from '@mantine/core';
import { useMemo } from 'react';

type Props = {
  currentStep: number;
  onStepClick: (step: number) => Promise<void>;
  step2Disabled: boolean;
  step4Disabled: boolean;
  step5Disabled: boolean;
};

export const TutorialSteps: FC<Props> = ({
  currentStep,
  onStepClick,
  step2Disabled,
  step4Disabled,
  step5Disabled,
}) => {
  const top = currentStep * 65 + 44 + 'px';
  const completed = currentStep === 5;
  const hiddenIcon = useMemo(() => {
    if (currentStep === 1) return step2Disabled;
    if (currentStep === 3) return step4Disabled;
    if (currentStep === 4) return step5Disabled;

    return completed;
  }, [currentStep, step2Disabled, step4Disabled, step5Disabled, completed]);

  return (
    <SignboardContainer>
      <div className="w-fit">
        <h3 className="text-center font-baloo">- Tutorial step -</h3>
        <div className="relative mt-3 flex w-72 rounded bg-white px-4 pt-4">
          {!hiddenIcon && (
            <TouchIcon
              className="absolute left-1 z-10 animate-bounce text-gray-400"
              style={{ top }}
              size={28}
            />
          )}
          <Stepper
            size="sm"
            active={currentStep}
            onStepClick={(value) => !completed && onStepClick(value + 1)}
            orientation="vertical"
          >
            <Stepper.Step
              icon={<ProfileIcon />}
              label="1. アカウントの作成"
              description="Create an account"
            />
            <Stepper.Step
              icon={<CreditCardIcon size={18} />}
              label="2. クレジットカードの登録"
              description="Add a payment method"
              disabled={step2Disabled}
            />
            <Stepper.Step
              icon={<LeafIcon size={18} />}
              label="3. Getting Started を読む"
              description="Read the Getting Started"
            />
            <Stepper.Step
              icon={<ProfileIcon size={18} />}
              label="4. 目標と自己紹介を書く"
              description="Write your goal and self-introduction"
              disabled={step4Disabled}
            />
            <Stepper.Step
              icon={<BookIcon size={18} />}
              label="5. Lesson を一つ達成する"
              description="Complete one lesson"
              disabled={step5Disabled}
            />
          </Stepper>
        </div>
      </div>
    </SignboardContainer>
  );
};
